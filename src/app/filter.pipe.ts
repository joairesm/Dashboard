import { Pipe } from '@angular/core';
import { account } from './Models/account';

const ACTIVE = 'active';
const DEACTIVATE = 'deactive';

/**
 * This class is responsible of filtering the search results.
 */
@Pipe({name: 'filterpipe', pure: false})
export class FilterPipe {
  transform(list: account[], searchText: string): account[] {
    
    if(searchText == null) return list;
    if(searchText.length < 3) return list;
    searchText = searchText.trim();
    var newList= [];
    
    list.forEach(s => {
        if((ACTIVE.includes(searchText.toLowerCase())) && s.active) newList.push(s);
        if((DEACTIVATE.includes(searchText.toLowerCase()))
        && searchText.startsWith('de') && !s.active) newList.push(s);
        if(s.number.toString().includes(searchText)) newList.push(s);
        if(s.subscription.name.toLowerCase().includes(searchText)) newList.push(s);
    });
    return newList; 

  }
}