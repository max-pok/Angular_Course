import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textedit'
})
export class TexteditPipe implements PipeTransform {

  transform(value: string, lastWord?: string) {
    if (!value) return null;
    let words = value.split(" ");
    let prepositions = ["Of", "The", "Is"];
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      if (prepositions.includes(words[i]) && i != 0) {
        words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1).toLowerCase();
      }
    }
    return words.join(" ");
  }

}
