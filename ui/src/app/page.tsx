import Me from "@/features/me/me";
import Play from "@/features/play/play";
import Work from "@/features/work";

import { Tabs, TabPanels, TabPanel, PillTabNav } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="p-4">
      <Tabs defaultIndex={0}>
        <div className="flex justify-center mb-8">
          <PillTabNav />
        </div>
        <TabPanels>
          <TabPanel index={0}>
            <Me />
          </TabPanel>
          <TabPanel index={1}>
            <Work />
          </TabPanel>
          <TabPanel index={2}>
            <Play />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
