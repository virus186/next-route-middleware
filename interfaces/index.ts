export type Address = {
  address_id: number
  address_title: string
  address_line_1: string
  address_line_2: string
  landmark: string
  city: string
  state_id: number
  country_id: number
  zip_code: string
  mobile_number: string
  type: string
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type User = {
  id: number
  name: string
  email: string
  password: string
  role: string
  mobile_number: string
  address_id: number
  image_id: number
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type roles = {
  role_id: number
  name: string
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type permissions = {
  permission_id: number
  module_id: number
  name: string
  slug: string
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}


export type modules = {
  module_id: number
  name: string
  parent: string
  desc: string
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type roles_permissions = {
  role_id: number
  permission_id: string
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type tokens = {
  token_id: number
  token: string
  action: string
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type items = {
  id: number
  name: string
  sku: string
  hsn: string
  tax: string
  price: number
  quantity: number
  purchase_price: number
  image_id: [number]
  shelf_id: number
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type shelfs = {
  shelf_id: number
  name: string
  barcode: string
  shelf_location: string
  rack_id: number
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type racks = {
  rack_id: number
  name: string
  barcode: string
  rack_location: string
  warehouse_id: number
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type images = {
  image_id: number
  url: string
  type: string
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}

export type warehouse = {
  warehouse_id: number
  name: string
  incharge_id: number
  address_id: number
  user_id: number
  created_at: DOMHighResTimeStamp
  updated_at: DOMHighResTimeStamp
}


