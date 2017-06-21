
const EntityClassFactory = (BaseEntity, handlerMng) =>
  class extends BaseEntity {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (params) {

    super (params)

    this.handler = handlerMng.getHandler(
      params.property._id)

    this.handler.onCreate(params.property)
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onModify (context) {

    this.handler.onModify(context)
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onRemove() {

    this.handler.onRemove()
  }
}

export default EntityClassFactory