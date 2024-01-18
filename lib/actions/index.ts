"use server"
import { revalidatePath } from "next/cache";
import Product from "../models/productModel";
import { connectToDB } from "./mongoose";
import { scrapeAmazonProduct } from "./scraper";
import { getAveragePrice, getLowestPrice, getHighestPrice } from "./utils";


const scrapeAndStoreProduct = async (productUrl: string) => {
    if (!productUrl) return;

    try {
        connectToDB()
        const scrapedProduct = await scrapeAmazonProduct(productUrl)
        if (!scrapedProduct) return

        let product = scrapedProduct

        const exsistingProduct = await Product.findOne({ url: scrapedProduct.url })

        if (exsistingProduct) {
            const updatedPriceHistory: any = [
                ...exsistingProduct.priceHistory,
                { price: scrapedProduct.currentPrice }
            ]

            product = {
                ...scrapedProduct,
                priceHistory: updatedPriceHistory,
                lowestPrice: getLowestPrice(updatedPriceHistory),
                highestPrice: getHighestPrice(updatedPriceHistory),
                averagePrice: getAveragePrice(updatedPriceHistory)

            }
        }

        const newProduct = await Product.findOneAndUpdate(
            { url: scrapedProduct.url },
            product,
            { upsert: true, new: true }
        )

        revalidatePath(`/products/${newProduct._id}`)

    } catch (error: any) {
        throw new Error(`Failed to create/update product:`)
    }
}

export async function getProductById(productId: string) {
    try {
        connectToDB();

        const product = await Product.findOne({ _id: productId })
        !product ? null : product

    } catch (error) {
        console.log(error)
    }
}

export async function getAllProducts() {
    try {
        connectToDB();
        const product = await Product.find()

        return product

    } catch (error) {
        console.log(error)
    }
}

export default scrapeAndStoreProduct