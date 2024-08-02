import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Header = () => (
  <header className="flex justify-between items-center p-4">
    <div className="flex items-center">
      <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
      <span className="text-xl font-bold">Stock Tracker</span>
    </div>
    <nav>
      <Button variant="ghost">Dashboard</Button>
      <Button variant="ghost">Tools</Button>
      <Button variant="ghost">Pricing</Button>
      <Button variant="ghost">About</Button>
    </nav>
    <div>
      <Button variant="outline" className="mr-2">Log In</Button>
      <Button>Sign Up</Button>
    </div>
  </header>
);

const Hero = () => (
  <section className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4">MAKE CONFIDENT<br />INVESTMENT DECISIONS</h1>
    <div className="max-w-xl mx-auto">
      <Input 
        type="text" 
        placeholder="Search stocks here..." 
        className="mb-4"
      />
    </div>
    <div className="flex justify-center space-x-2 mb-4">
      {['XOM', 'WMT', 'TSLA', 'SBUX', 'PYPL', 'PG', 'ORCL', 'NFLX', 'MSFT', 'MMM', 'META', 'KO', 'INTC', 'GOOGL', 'COST'].map((stock) => (
        <Button key={stock} variant="outline" size="sm">{stock}</Button>
      ))}
    </div>
    <p className="text-sm text-gray-500">
      Trusted by more than 162,600 successful value investors
    </p>
  </section>
);

const ValueProposition = () => (
  <section className="text-center py-10 bg-gray-100">
    <h2 className="text-2xl font-bold mb-2">
      GREAT INVESTORS BUY VALUE
    </h2>
    <p className="text-xl text-gray-600">
      NOT SPECULATE
    </p>
    <blockquote className="italic text-gray-700 mt-4">
      "Intrinsic Value is all-important and is the only logical way to evaluate the relative attractiveness of investments and businesses."
    </blockquote>
  </section>
);


const StockAnalysis = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">The higher the score, the better.</h2>
        </div>
        <div className="flex justify-between items-start">
          <Card className="w-2/3 mr-4">
            <CardHeader>
              <CardTitle>AAPL Price Targets</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace with actual chart component */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                Price target chart placeholder
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-green-500">92</CardTitle>
              <CardTitle className="text-xl">SOLVENCY</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>High Interest Coverage</li>
                <li>High Altman Z-Score</li>
                <li>Low D/E</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
  
  const WallStreetEstimates = () => (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-bold mb-4">WALL STREET PRICE TARGETS</h2>
            <p className="text-gray-600">
              Discover the expectations of top Wall Street analysts, who use a 
              combination of fundamental and technical factors to arrive at a price 
              target that reflects their view of a stock. Our intuitive representation 
              of their insights makes it easy to understand and act on their 
              recommendations.
            </p>
          </div>
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>AAPL Revenue Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace with actual chart component */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                Revenue forecast chart placeholder
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
  
  const AnalysisDepth = () => (
    <section className="py-10 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">CHECK OUT OUR ANALYSIS DEPTH</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {['Summary', 'DCF Valuation', 'Relative Valuation', 'Wall St Estimates', 
            'Profitability Analysis', 'Solvency Analysis', 'Financials', 'Revenue Breakdown',
            'Earnings Calls', 'Executive Team'].map((item) => (
            <Button key={item} variant="outline" size="sm">{item}</Button>
          ))}
        </div>
      </div>
    </section>
  );
  
  const LandingPage = () => (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueProposition />
      <StockAnalysis />
      <WallStreetEstimates />
      <AnalysisDepth />
    </div>
  );
  
  export default LandingPage;