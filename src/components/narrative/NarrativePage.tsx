import Image from "next/image";
import Link from "next/link";
import { PageContent } from "@/types/content";
import { TextReveal } from "@/components/animations/TextReveal";
import styles from "./NarrativePage.module.css";

interface NarrativePageProps {
  page: PageContent;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function NarrativePage({
  page,
  ctaHeading = "Begin the Conversation",
  ctaDescription = "Discuss your architectural drawings, tender timeline, or custom residence with Haven's principal directors.",
}: NarrativePageProps) {
  const blocks = page.blocks || [];

  // Identify first section intro as page header
  const headerBlockIndex = blocks.findIndex((b) => b.type === "section-intro");
  const headerBlock = headerBlockIndex !== -1 ? blocks[headerBlockIndex] : null;
  const remainingBlocks = blocks.filter((_, idx) => idx !== headerBlockIndex);

  return (
    <article className={styles.container}>
      {/* Page Header */}
      {headerBlock && (
        <header className={styles.header}>
          {headerBlock.subheading && (
            <p className={styles.label}>{headerBlock.subheading}</p>
          )}
          <TextReveal as="h1" className={styles.title} baseDelay={50}>
            {headerBlock.heading}
          </TextReveal>
          {headerBlock.content && (
            <div
              className={styles.introContent}
              dangerouslySetInnerHTML={{ __html: headerBlock.content }}
            />
          )}
        </header>
      )}

      {/* Dynamic Content Blocks */}
      {remainingBlocks.map((block, idx) => {
        if (block.type === "image" && block.image?.sourceUrl) {
          return (
            <div key={idx} className={styles.fullImageWrapper}>
              <Image
                src={block.image.sourceUrl}
                alt={block.image.alt || `${page.title} imagery`}
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                className={styles.fullImage}
              />
            </div>
          );
        }

        if (block.type === "section-intro") {
          return (
            <section key={idx} className={styles.sectionBlock}>
              {block.subheading && (
                <p className={styles.sectionSubheading}>{block.subheading}</p>
              )}
              <h2 className={styles.sectionHeading}>{block.heading}</h2>
              {block.content && (
                <div
                  className={styles.sectionNarrative}
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              )}
            </section>
          );
        }

        if (block.type === "image-three-column" && Array.isArray(block.images)) {
          return (
            <div key={idx} className={styles.threeColumnGrid}>
              {block.images.map((item: any, imgIdx: number) => {
                const src = item?.image?.sourceUrl;
                if (!src) return null;
                return (
                  <div key={imgIdx} className={styles.gridItem}>
                    <div className={styles.gridImageWrapper}>
                      <Image
                        src={src}
                        alt={item.image.alt || `Craft detail ${imgIdx + 1}`}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className={styles.gridImage}
                      />
                    </div>
                    {item.caption && (
                      <p className={styles.caption}>{item.caption}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }

        if (block.type === "image-two-column" && Array.isArray(block.images)) {
          return (
            <div key={idx} className={styles.twoColumnGrid}>
              {block.images.map((item: any, imgIdx: number) => {
                const src = item?.image?.sourceUrl;
                if (!src) return null;
                return (
                  <div key={imgIdx} className={styles.gridItem}>
                    <div className={styles.gridImageWrapper}>
                      <Image
                        src={src}
                        alt={item.image.alt || `Detail ${imgIdx + 1}`}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className={styles.gridImage}
                      />
                    </div>
                    {item.caption && (
                      <p className={styles.caption}>{item.caption}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }

        if (block.type === "quote" && block.quote) {
          return (
            <blockquote key={idx} className={styles.quoteBlock}>
              <p className={styles.quoteText}>&ldquo;{block.quote.trim()}&rdquo;</p>
              {block.authorName && (
                <cite className={styles.quoteAuthor}>— {block.authorName}</cite>
              )}
            </blockquote>
          );
        }

        if (block.type === "list-carousel") {
          return (
            <div key={idx} className={styles.collaboratorsCard}>
              <h3 className={styles.collaboratorsHeading}>{block.heading}</h3>
              {block.description && (
                <p className={styles.collaboratorsDesc}>{block.description}</p>
              )}
            </div>
          );
        }

        return null;
      })}

      {/* Shared Luxury Consultation CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>{ctaHeading}</h2>
        <p className={styles.ctaSub}>{ctaDescription}</p>
        <Link href="/contact" className={styles.ctaButton}>
          <span>Arrange a Consultation</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </article>
  );
}
