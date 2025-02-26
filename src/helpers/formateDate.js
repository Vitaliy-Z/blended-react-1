import { formatDistanceToNow, format } from 'date-fns';

export const formateDate = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });

export const formate = date => format(new Date(date), 'dd/mm/yyyy, hh:mm aaa');
