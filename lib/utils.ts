import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function parseDate(dateString: string) {
  if (dateString.length !== 6) return null;

  const day = parseInt(dateString.substring(0, 2), 10);
  const month = parseInt(dateString.substring(2, 4), 10) - 1;
  const year = 2000 + parseInt(dateString.substring(4, 6), 10);

  const date = new Date(year, month, day);

  if (
    date.getDate() !== day ||
    date.getMonth() !== month ||
    date.getFullYear() !== year
  ) {
    return null;
  }

  return date;
};

export function formatDate(date: Date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export function formatISODate(isoString: Date) {
  const date = new Date(isoString);
  return formatDate(date);
}

export async function deleteImage(fileUrl: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploadthing/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fileUrl })
  });

  if (!response.ok) {
    throw new Error("Failed to delete image");
  }
  return { status: "success" };

};

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
}


