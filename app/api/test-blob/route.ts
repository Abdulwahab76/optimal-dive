// app/api/test-blob/route.ts
import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function GET() {
  try {
    const result = await put('test-upload.txt', 'hello from vercel blob test', {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })

    return NextResponse.json({
      success: true,
      url: result.url,
      tokenExists: !!process.env.BLOB_READ_WRITE_TOKEN,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message ?? String(error),
        tokenExists: !!process.env.BLOB_READ_WRITE_TOKEN,
      },
      { status: 500 }
    )
  }
}