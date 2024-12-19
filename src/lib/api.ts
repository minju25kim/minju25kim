import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = (dir: string) => join(process.cwd(), `src/markdown/${dir}`);

export function getPostSlugs(dir: string) {
    return fs.readdirSync(postsDirectory(dir));
}

export function getPostBySlug(dir: string, slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory(dir), `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(dir: string): Post[] {
    const slugs = getPostSlugs(dir);
    const posts = slugs
        .map((slug) => getPostBySlug(dir, slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}