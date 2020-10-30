import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { tagHrefResolver, tagLinkResolver } from "prismic-configuration";

export interface TagsProps {
  blogPostTags: [];
}

const Tags = ({ blogPostTags }: TagsProps) => {
  return (
    <div>
      {blogPostTags.map(({ tag }: any, index: number) => {
        if (!tag?.data) return;

        const { title } = tag?.data;

        return (
          <span key={tag.uid}>
            {index ? ", " : ""}
            <Link
              href={tagLinkResolver(tag.uid)}
              passHref
            >
              <a className="blogPostTag">{RichText.asText(title)}</a>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export { Tags };
