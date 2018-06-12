// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/shuto/Desktop/Goalist/prac/play-project/conf/routes
// @DATE:Mon Jun 11 19:31:17 JST 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
