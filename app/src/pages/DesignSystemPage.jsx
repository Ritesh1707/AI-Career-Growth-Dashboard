import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Heading, Text } from '../components/ui/Typography';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-12 lg:p-24 transition-colors duration-normal">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <header className="space-y-4">
          <Badge variant="accent">Internal Tool</Badge>
          <Heading level={1}>Design System</Heading>
          <Text variant="lead">
            Core UI primitives and tokens for the AI Career Growth Dashboard. 
            Toggle your system theme to see dark mode variations.
          </Text>
        </header>

        {/* Typography */}
        <section className="space-y-8">
          <div className="border-b border-border pb-2">
            <Heading level={3}>Typography</Heading>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Heading level={1}>Heading 1 (Display)</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
              <Heading level={5}>Heading 5</Heading>
            </div>
            <div className="space-y-4 pt-4 border-t border-border">
              <Text variant="lead">Lead Text: The quick brown fox jumps over the lazy dog. A large body of text used to introduce a section.</Text>
              <Text variant="body">Body Text: The quick brown fox jumps over the lazy dog. Standard text for paragraphs and descriptions.</Text>
              <Text variant="muted">Muted Text: The quick brown fox jumps over the lazy dog. Used for secondary information.</Text>
              <Text variant="small">Small Text: The quick brown fox jumps over the lazy dog. Used for captions and fine print.</Text>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-8">
          <div className="border-b border-border pb-2">
            <Heading level={3}>Buttons</Heading>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-border">
              <Button size="sm">Small</Button>
              <Button size="md">Medium (Default)</Button>
              <Button size="lg">Large Button</Button>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-border">
              <Button variant="primary" disabled>Disabled Primary</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-8">
          <div className="border-b border-border pb-2">
            <Heading level={3}>Badges</Heading>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default Badge</Badge>
            <Badge variant="accent">Accent Badge</Badge>
            <Badge variant="success">Success Badge</Badge>
            <Badge variant="warning">Warning Badge</Badge>
            <Badge variant="danger">Danger Badge</Badge>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-8">
          <div className="border-b border-border pb-2">
            <Heading level={3}>Cards</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Career Module</CardTitle>
                <CardDescription>A standard dashboard card used for containing feature information.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="muted">
                  Cards are the primary structural element used within the dashboard layout to group related content and actions.
                </Text>
              </CardContent>
              <CardFooter className="justify-between">
                <Badge variant="accent">Draft</Badge>
                <Button variant="outline" size="sm" className="focus-visible:ring-offset-surface-raised">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Another Card</CardTitle>
                <CardDescription>Demonstrating grid layout and consistent spacing.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface rounded border border-border-subtle">
                  <Text variant="small" className="font-medium text-content">Current Skill</Text>
                  <Badge variant="success">Mastered</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface rounded border border-border-subtle">
                  <Text variant="small" className="font-medium text-content">Target Skill</Text>
                  <Badge variant="warning">Learning</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full focus-visible:ring-offset-surface-raised">Take Action</Button>
              </CardFooter>
            </Card>

          </div>
        </section>

      </div>
    </div>
  );
}
