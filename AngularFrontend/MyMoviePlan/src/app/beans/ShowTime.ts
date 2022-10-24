export class ShowTime {
  id?: number = 0;
  starttime: Date = new Date(0);
  price: number = 0;
  theatre: number = 0;
  available: number = 0;
  enabled: boolean = false;
  movie?: {id:number};
}
