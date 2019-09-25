export class Image {
  constructor(
    public iconUrl: string,
    public mediumUrl: string,
    public screenUrl: string,
    public screenLargeUrl: string,
    public smallUrl: string,
    public superUrl: string,
    public thumbUrl: string,
    public tinyUrl: string,
    public original: string,
    public original_url: string,
    public imageTags: string
  ) {

  }

  getOriginalUrl(): string {
   return this.original_url;
  }
}
