import { TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid @5xl/main:grid-cols-4 @xl/main:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-sm font-medium text-muted-foreground/80">
            Total Revenue
          </CardDescription>
          <CardTitle className="font-bold @[250px]/card:text-4xl text-3xl tabular-nums tracking-tight">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-green-500 border-green-500/30 bg-green-500/10">
              <TrendingUp className="size-3" />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground/90">
            Trending up this month <TrendingUp className="size-4 text-green-500" />
          </div>
          <div className="text-muted-foreground text-xs">Visitors for the last 6 months</div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-sm font-medium text-muted-foreground/80">
            New Customers
          </CardDescription>
          <CardTitle className="font-bold @[250px]/card:text-4xl text-3xl tabular-nums tracking-tight">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-red-500 border-red-500/30 bg-red-500/10">
              <TrendingDown className="size-3" />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground/90">
            Down 20% this period <TrendingDown className="size-4 text-red-500" />
          </div>
          <div className="text-muted-foreground text-xs">Acquisition needs attention</div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-sm font-medium text-muted-foreground/80">
            Active Accounts
          </CardDescription>
          <CardTitle className="font-bold @[250px]/card:text-4xl text-3xl tabular-nums tracking-tight">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-green-500 border-green-500/30 bg-green-500/10">
              <TrendingUp className="size-3" />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground/90">
            Strong user retention <TrendingUp className="size-4 text-green-500" />
          </div>
          <div className="text-muted-foreground text-xs">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-sm font-medium text-muted-foreground/80">
            Growth Rate
          </CardDescription>
          <CardTitle className="font-bold @[250px]/card:text-4xl text-3xl tabular-nums tracking-tight">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-green-500 border-green-500/30 bg-green-500/10">
              <TrendingUp className="size-3" />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground/90">
            Steady performance increase <TrendingUp className="size-4 text-green-500" />
          </div>
          <div className="text-muted-foreground text-xs">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}
