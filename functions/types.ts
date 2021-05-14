export interface GoogleApisParams {
  function: string
}

export interface GetDataParams extends GoogleApisParams {
  range?: string
}

export interface PostDataParams extends GoogleApisParams {
  range: string
  data: string
}
