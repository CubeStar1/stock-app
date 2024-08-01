"use client";


import News from "@/components/News"
const StockDetailPage = ({
    params,
    searchParams,
  }: {
    params: { symbol: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
    return <News symbol={params.symbol} />
  }

export default StockDetailPage;
