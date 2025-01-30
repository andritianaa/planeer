import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="space-x-4 p-4">
      <Input />
      <Button variant={"primary"}>primary</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"muted"}>muted</Button>
      <Button variant={"teritary"}>teritary</Button>
    </div>
  );
}
