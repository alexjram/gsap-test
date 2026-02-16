import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>New Project</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Alpha</CardTitle>
            <CardDescription>Active project</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description of Project Alpha and its current status.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Beta</CardTitle>
            <CardDescription>In progress</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description of Project Beta and upcoming milestones.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Gamma</CardTitle>
            <CardDescription>Planning phase</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Initial planning and requirements gathering for Project Gamma.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Delta</CardTitle>
            <CardDescription>Completed</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Project Delta has been completed successfully.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
