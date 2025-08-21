"use client";

import React, { useState, useEffect } from "react";
import { createCollection } from "@/actions/collection";
import { toast } from "sonner";
import CollectionPreview from "./collection-preview";
import CollectionForm from "@/components/collection-dialog";
import useFetch from "@/hooks/use-fetch";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const Collections = ({ collections = [], entriesByCollection }) => {
  const [isCollectionDialogOpen, setIsCollectionDialogOpen] = useState(false);

  const {
    loading: createCollectionLoading,
    fn: createCollectionFn,
    data: createdCollection,
  } = useFetch(createCollection);

  useEffect(() => {
    if (createdCollection) {
      setIsCollectionDialogOpen(false);
      toast.success(`✨ Collection "${createdCollection.name}" created!`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdCollection, createCollectionLoading]);

  const handleCreateCollection = async (data) => {
    createCollectionFn(data);
  };

  if (collections.length === 0 && !entriesByCollection?.unorganized?.length) {
    return <></>;
  }

  return (
    <section id="collections" className="space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          📂 Collections
        </h2>
      </div>

      {/* Collection Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Create New Collection Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-6 cursor-pointer hover:border-purple-500 transition-colors shadow-sm hover:shadow-lg"
          onClick={() => setIsCollectionDialogOpen(true)}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <Plus className="w-8 h-8 text-purple-500" />
            <span className="font-medium">Create New</span>
          </div>
        </motion.div>

        <AnimatePresence>
          {/* Unorganized Collection */}
          {entriesByCollection?.unorganized?.length > 0 && (
            <motion.div
              key="unorganized"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CollectionPreview
                name="Unorganized"
                entries={entriesByCollection.unorganized}
                isUnorganized={true}
              />
            </motion.div>
          )}

          {/* User Collections */}
          {collections?.map((collection) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CollectionPreview
                id={collection.id}
                name={collection.name}
                entries={entriesByCollection[collection.id] || []}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Dialog */}
      <CollectionForm
        loading={createCollectionLoading}
        onSuccess={handleCreateCollection}
        open={isCollectionDialogOpen}
        setOpen={setIsCollectionDialogOpen}
      />
    </section>
  );
};

export default Collections;
