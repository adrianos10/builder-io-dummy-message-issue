import { LiveChatComponent } from "@/components/liveChat";
import { PageProps } from "@/types/next";
import { formatPathname } from "@/utils/formatPathname";
import {
  Content,
  fetchOneEntry,
  isEditing,
  isPreviewing,
} from "@builder.io/sdk-react";
import { notFound } from "next/navigation";

const builderApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "";

export default async function Page(props: PageProps) {
  const urlPath = formatPathname(...(props.params.slug ?? []));

  const content = await fetchOneEntry({
    apiKey: builderApiKey,
    options: props.searchParams,
    model: "page",
    userAttributes: { urlPath },
  });

  const canShowContent =
    content ||
    isPreviewing(props.searchParams) ||
    isEditing(props.searchParams);

  if (!canShowContent) {
    notFound();
  }

  return (
    <Content
      apiKey={builderApiKey}
      content={content}
      model="page"
      customComponents={[LiveChatComponent]}
    />
  );
}
