import { requests } from '../services/api/index'
import routes from '../services/api/routes'

export async function getData(data: any) {
  const response = requests.get(`${routes.BASE_URL}${routes.GET_INVOICES}?q=${data.searchValue}`)
  return response;
}