
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const airdrops = [
  {
    name: "ZetaChain",
    status: "Claiming",
    snapshotDate: "2024-12-15",
    claimLink: "https://airdrop.zetachain.com",
  },
  {
    name: "Starknet",
    status: "Closed",
    snapshotDate: "2024-11-01",
    claimLink: "https://starknet.io/airdrop",
  },
  {
    name: "Wormhole",
    status: "Upcoming",
    snapshotDate: "2025-05-10",
    claimLink: "https://airdrop.wormhole.com",
  },
];

export default function AirdropTracker() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Airdrop Tracker Adekurnia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {airdrops.map((airdrop, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{airdrop.name}</h2>
                <Badge
                  className={
                    airdrop.status === "Claiming"
                      ? "bg-green-500"
                      : airdrop.status === "Closed"
                      ? "bg-gray-400"
                      : "bg-yellow-500"
                  }
                >
                  {airdrop.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">
                Snapshot: {airdrop.snapshotDate}
              </p>
              <Button asChild className="w-full">
                <a href={airdrop.claimLink} target="_blank" rel="noopener noreferrer">
                  Go to Airdrop
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
