import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Financial Sustainability</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Partnering with GSK offers multiple financial benefits to sustain and expand the initiatives. Here&apos;s a clear breakdown:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Annual Partnership Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <h3 className="text-2xl font-semibold text-primary">Annual Partnership</h3>
            <Badge className="mt-2">Core Membership</Badge>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-3xl font-bold">Kes 200,000</span>
              <span className="text-muted-foreground">/annually</span>
            </div>
            <p className="text-muted-foreground">
              Support GSK programs and member services as a partnering company
            </p>
          </CardContent>
        </Card>

        {/* Advertising Opportunities */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <h3 className="text-2xl font-semibold text-primary">Advertising</h3>
            <Badge className="mt-2">Multiple Options</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold">Home Page Banner Ads</div>
                <div className="text-xl font-bold">Kes 80,000</div>
                <div className="text-sm text-muted-foreground">per season</div>
              </li>
              <li>
                <div className="font-semibold">Secondary Page Ads</div>
                <div className="text-xl font-bold">Kes 50,000</div>
                <div className="text-sm text-muted-foreground">per season</div>
              </li>
              <li>
                <div className="font-semibold">Sponsored Content</div>
                <div className="text-xl font-bold">Kes 30,000</div>
                <div className="text-sm text-muted-foreground">per article</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Sponsorship Opportunities */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <h3 className="text-2xl font-semibold text-primary">Sponsorships</h3>
            <Badge className="mt-2">Premium Options</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold">Webinar Sponsorships</div>
                <div className="text-xl font-bold">Kes 100,000</div>
                <div className="text-sm text-muted-foreground">per session</div>
              </li>
              <li>
                <div className="font-semibold">Exclusive Sponsorship Package</div>
                <div className="text-xl font-bold">Kes 500,000</div>
                <div className="text-sm text-muted-foreground">annually</div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Financial Projections Section */}
      <div className="bg-secondary/10 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Financial Income Projection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Annual Partners</h3>
            <p className="text-xl font-bold">Kes 1,000,000</p>
            <p className="text-sm text-muted-foreground">5 partners</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Home Page Ads</h3>
            <p className="text-xl font-bold">Kes 320,000</p>
            <p className="text-sm text-muted-foreground">4 companies</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Secondary Page Ads</h3>
            <p className="text-xl font-bold">Kes 500,000</p>
            <p className="text-sm text-muted-foreground">10 ads</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Sponsored Content</h3>
            <p className="text-xl font-bold">Kes 300,000</p>
            <p className="text-sm text-muted-foreground">10 articles</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Webinar Sponsorships</h3>
            <p className="text-xl font-bold">Kes 600,000</p>
            <p className="text-sm text-muted-foreground">6 sessions</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Exclusive Sponsorships</h3>
            <p className="text-xl font-bold">Kes 1,000,000</p>
            <p className="text-sm text-muted-foreground">2 companies</p>
          </div>
        </div>
      </div>
    </div>
  )
} 