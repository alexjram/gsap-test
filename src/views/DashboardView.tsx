import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Overview of your application</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is your main dashboard view with key metrics and information.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>Current performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>View your latest statistics and analytics here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Track recent activities and system events.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
