'use client'

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, UploadCloud, Youtube, Globe, FileText, BookAudio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Platform = "youtube" | "webpage" | "documents" | "audio"

const platforms: { id: Platform; label: string; icon: typeof Youtube }[] = [
  { id: "youtube", label: "YOUTUBE", icon: Youtube },
  { id: "webpage", label: "WEBPAGE", icon: Globe },
  { id: "documents", label: "DOCUMENTS", icon: FileText },
  { id: "audio", label: "AUDIO", icon: BookAudio },
]

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [platform, setPlatform] = useState<Platform>("youtube")
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [collection, setCollection] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [urlError, setUrlError] = useState("")
  const [titleError, setTitleError] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)

  const resetForm = useCallback(() => {
    setUrl("")
    setTitle("")
    setCollection("")
    setDescription("")
    setUrlError("")
    setTitleError("")
    setIsSubmitting(false)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => resetForm(), 200)
      return () => clearTimeout(timer)
    }
  }, [isOpen, resetForm])

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  function validate(): boolean {
    let valid = true
    setUrlError("")
    setTitleError("")

    if (!url.trim()) {
      setUrlError("Resource URL is required.")
      valid = false
    } else if (!/^https?:\/\/.+/i.test(url.trim())) {
      setUrlError("Enter a valid URL starting with http:// or https://")
      valid = false
    }

    if (!title.trim()) {
      setTitleError("Resource title is required.")
      valid = false
    }

    return valid
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative flex items-center justify-center pt-8 pb-2 px-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-8 top-8 p-1.5 rounded-xl text-[#515981] hover:text-[#242c51] hover:bg-[#f0efff] transition-all active:scale-95"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#f0efff] rounded-2xl flex items-center justify-center mb-4">
                  <UploadCloud className="text-[#242c51]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#242c51]">
                  Upload Resource
                </h2>
                <p className="font-mono text-sm text-[#515981] mt-1.5 max-w-xs">
                  Add a new resource to your collection.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8 pt-5 space-y-5">
              {/* Platform Selector */}
              <div className="flex flex-wrap justify-center bg-[#e4e7ff] rounded-xl p-1 gap-1">
                {platforms.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setPlatform(id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase active:scale-95 transition-all ${
                      platform === id
                        ? "bg-white text-[#242c51] shadow-sm"
                        : "text-[#515981] hover:bg-white/50"
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>

              {/* Resource URL */}
              <div className="space-y-1.5">
                <label className="font-mono text-sm font-medium text-[#242c51]">
                  Resource URL <span className="text-red-400">*</span>
                </label>
                <Input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  className="bg-[#f0efff] border-0 focus-visible:ring-[#0a79ff] font-mono text-[#242c51] placeholder:text-[#515981]/50"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value)
                    if (urlError) setUrlError("")
                  }}
                  aria-invalid={!!urlError}
                />
                {urlError && (
                  <p className="text-xs font-mono font-medium text-red-500">
                    {urlError}
                  </p>
                )}
              </div>

              {/* Resource Title */}
              <div className="space-y-1.5">
                <label className="font-mono text-sm font-medium text-[#242c51]">
                  Resource Title <span className="text-red-400">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="My awesome resource"
                  className="bg-[#f0efff] border-0 focus-visible:ring-[#0a79ff] font-mono text-[#242c51] placeholder:text-[#515981]/50"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                    if (titleError) setTitleError("")
                  }}
                  aria-invalid={!!titleError}
                />
                {titleError && (
                  <p className="text-xs font-mono font-medium text-red-500">
                    {titleError}
                  </p>
                )}
              </div>

              {/* Collection */}
              <div className="space-y-1.5">
                <label className="font-mono text-sm font-medium text-[#242c51]">
                  Collection
                </label>
                <select
                  value={collection}
                  onChange={(e) => setCollection(e.target.value)}
                  className="w-full bg-[#f0efff] border-0 focus:ring-2 focus:ring-[#0a79ff] rounded-xl px-4 py-3 font-mono text-[#242c51] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a collection
                  </option>
                  <option value="general">General</option>
                  <option value="tutorials">Tutorials</option>
                  <option value="inspiration">Inspiration</option>
                  <option value="research">Research</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="font-mono text-sm font-medium text-[#242c51]">
                  Description <span className="text-[#515981]/60 font-normal">(optional)</span>
                </label>
                <Textarea
                  placeholder="Add notes or a summary..."
                  className="bg-[#f0efff] border-0 focus-visible:ring-[#0a79ff] font-mono text-[#242c51] placeholder:text-[#515981]/50 min-h-24 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="flex-1 font-mono text-[#515981] hover:text-[#242c51] hover:bg-[#f0efff] rounded-xl h-12"
                >
                  Cancel
                </Button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-mono font-semibold text-sm hover:bg-gray-800 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Uploading..."
                  ) : (
                    <>
                      <UploadCloud size={16} />
                      Upload Resource
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
