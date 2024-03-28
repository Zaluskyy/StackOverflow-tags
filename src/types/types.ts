export type TagItem = {
    tag: string;
    links: string[];
  };

export interface Data {
    tag: string;
    count: number;
    link: string[];
  }

export interface Column {
  id: "tag" | "count" | "link";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface IRow{
  tag: string,
  count: number,
  link: string[]
}

export interface RowProps {
  columns: readonly Column[];
  row: any;
}