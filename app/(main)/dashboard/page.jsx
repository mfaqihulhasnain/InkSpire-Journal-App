import { getCollections } from "@/actions/collection";
import { getJournalEntries } from "@/actions/journal";
import Collections from "./_components/collections";
import React from "react";
import MoodAnalytics from "./_components/mood-analytics";

const Dashboard = async () => {
  const collection = await getCollections();
  const entriesData = await getJournalEntries();

  const entriesByCollection = entriesData?.data.entries.reduce((acc, entry) => {
    const collectionId = entry.collectionId || "unorganized";
    if (!acc[collectionId]) {
      acc[collectionId] = [];
    }
    acc[collectionId].push(entry);
    return acc;
  }, {});

  // console.log("Entries by Collection:", entriesByCollection);

  return <div className="px-4 py-8 space-y-8">
  <section className="space-y-4">
    <MoodAnalytics />
  </section>

  <Collections
  collections={collection}
  entriesByCollection={entriesByCollection}
  />
  </div>;
};

export default Dashboard;
