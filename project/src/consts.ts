export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/room/:id',
  NotFound = '*'
}

export enum CityListNames {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
