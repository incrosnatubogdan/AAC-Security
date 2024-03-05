export interface ServiceDescription {
  icon: string,
  title: string,
  description: string,
  action: ServiceAction
}

export interface ServiceAction {
  route: string,
  label: string,
}