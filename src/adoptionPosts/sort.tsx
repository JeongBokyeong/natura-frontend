import list from './list';
export default function sort(list : any, input : string){
    const sorted : any = [];
    if(input === 'popularity') {
        return list.sort((a:any, b:any) => a.popularity - b.popularity);
    } else if(input === 'relavance') {
        return list.sort((a:any, b:any) => a.relavance - b.relavance);
    } else if(input === 'likes') {
        return list.sort((a:any, b:any) => a.likes - b.likes);
    }
}
