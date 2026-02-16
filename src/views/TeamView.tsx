import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TeamView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button>Invite Member</Button>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Search team members..." className="max-w-sm" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Product Manager</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Leading product strategy and roadmap planning.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
            <CardDescription>Lead Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Full-stack development and architecture decisions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mike Johnson</CardTitle>
            <CardDescription>UI/UX Designer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Creating beautiful and intuitive user interfaces.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sarah Williams</CardTitle>
            <CardDescription>QA Engineer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ensuring quality and reliability of the product.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
