import {DictionaryItem} from "../types/dictionaries";
import {Option} from "../types/fields";

export const getOptionByItemDictionary = (item: DictionaryItem): Option => {
    return {
        id: item.id,
        label: item.title,
    }
}