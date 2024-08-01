"use client";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Real-Time Stock Tracking</h1>
              <p className="text-muted-foreground md:text-lg">
                Stay ahead of the market with our comprehensive stock tracking dashboard.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-muted-foreground">S&P 500</div>
                  <div className="text-2xl font-bold">4,200.88</div>
                  <div className="text-green-500 font-medium">+1.2%</div>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-muted-foreground">NASDAQ</div>
                  <div className="text-2xl font-bold">13,002.53</div>
                  <div className="text-green-500 font-medium">+1.5%</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-muted-foreground">DJIA</div>
                  <div className="text-2xl font-bold">34,200.67</div>
                  <div className="text-red-500 font-medium">-0.8%</div>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-muted-foreground">Russell 2000</div>
                  <div className="text-2xl font-bold">2,050.44</div>
                  <div className="text-green-500 font-medium">+0.9%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 grid gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Top Gainers</h2>
              <Link href="#" className="text-sm text-primary" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">AAPL</div>
                  </div>
                  <div>Apple Inc.</div>
                </div>
                <div className="text-green-500 font-medium">+3.2%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">MSFT</div>
                  </div>
                  <div>Microsoft Corp.</div>
                </div>
                <div className="text-green-500 font-medium">+2.8%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">AMZN</div>
                  </div>
                  <div>Amazon.com, Inc.</div>
                </div>
                <div className="text-green-500 font-medium">+2.1%</div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 grid gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Top Losers</h2>
              <Link href="#" className="text-sm text-primary" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">TSLA</div>
                  </div>
                  <div>Tesla, Inc.</div>
                </div>
                <div className="text-red-500 font-medium">-1.9%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">NVDA</div>
                  </div>
                  <div>NVIDIA Corp.</div>
                </div>
                <div className="text-red-500 font-medium">-1.5%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">GOOGL</div>
                  </div>
                  <div>Alphabet Inc.</div>
                </div>
                <div className="text-red-500 font-medium">-1.2%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 ">
          <div className="bg-card rounded-lg p-6 grid gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Trending Stocks</h2>
              <Link href="#" className="text-sm text-primary" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">COIN</div>
                  </div>
                  <div>Coinbase Global, Inc.</div>
                </div>
                <div className="text-green-500 font-medium">+4.7%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">RBLX</div>
                  </div>
                  <div>Roblox Corp.</div>
                </div>
                <div className="text-green-500 font-medium">+3.9%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                    <div className="text-sm font-medium">SNAP</div>
                  </div>
                  <div>Snap Inc.</div>
                </div>
                <div className="text-green-500 font-medium">+3.2%</div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 grid gap-4 shadow-sm ">
            <div className="flex items-center justify-center lg:justify-between">
              <h2 className="text-lg font-bold hidden lg:block">Stock Performance</h2>
              <div className="flex items-center gap-2 ">
                <Button variant="outline" size="sm">
                  1D
                </Button>
                <Button variant="outline" size="sm">
                  1W
                </Button>
                <Button variant="outline" size="sm">
                  1M
                </Button>
                <Button variant="outline" size="sm">
                  1Y
                </Button>
              </div>
            </div>
            <div >
              <LinechartChart />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-card rounded-lg p-6 grid gap-4 max-w-md w-full shadow-sm">
            <h2 className="text-lg font-bold">Join Our Platform</h2>
            <p className="text-muted-foreground">Sign up for a free account and start tracking stocks today.</p>
            <div className="grid gap-2">
              <Button>Sign Up</Button>
              <Button variant="outline">Log In</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function LinechartChart() {
  return (
    <div >
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}