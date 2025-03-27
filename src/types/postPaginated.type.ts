import IPost from "./post.type";

export default interface IPostPaginated {
  'first': number,
  'items': number,
  'last': number,
  'next': number | null,
  'pages': number,
  'prev': number | null,
  'data': Array<IPost>
}