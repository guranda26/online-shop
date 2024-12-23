import { useEffect, useState } from "react";

interface Content {
  title: string;
  description: string;
  downloadUrl: string;
}

interface AccessResponse {
  accessGranted: boolean;
  content?: Content;
  error?: string;
}

export default function PremiumFeaturePage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    async function checkAccess() {
      try {
        const sessionId = new URLSearchParams(window.location.search).get(
          "session_id"
        );
        if (!sessionId) throw new Error("Session ID is missing");

        const response = await fetch(
          `/api/check-access?session_id=${sessionId}`
        );
        const data: AccessResponse = await response.json();

        if (data.accessGranted) {
          setHasAccess(true);
          setContent(data.content!);
        } else {
          setError(data.error || "You do not have access to this content.");
        }
      } catch (err) {
        setError("Failed to check access. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    checkAccess();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (hasAccess && content) {
    return (
      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold text-gray-900">Exclusive Content</h1>
        <p className="mt-4 text-gray-600">
          Congratulations on subscribing! You now have access to the premium
          ebook:
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {content.title}
          </h2>
          <p className="mt-4 text-gray-600">{content.description}</p>
          <a
            href={content.downloadUrl}
            download
            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Download the Ebook
          </a>
        </div>
      </div>
    );
  }

  return null; // fallback if neither loading, error, nor access
}
