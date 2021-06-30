import { MenuItem } from '../interfaces/navigation'
import { InjectionToken } from '@angular/core'

export const MENU_ITEM_TOKEN = new InjectionToken<MenuItem>('MENU_ITEM_TOKEN');