// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/shuto/Desktop/Goalist/prac/play-project/conf/routes
// @DATE:Mon Jun 11 19:31:17 JST 2018

import play.api.mvc.Call


import _root_.controllers.Assets.Asset
import _root_.play.libs.F

// @LINE:6
package controllers {

  // @LINE:6
  class ReverseHomeController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:12
    def update(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "update")
    }
  
    // @LINE:8
    def recieve(): Call = {
      
      Call("POST", _prefix)
    }
  
    // @LINE:10
    def delete(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "delete")
    }
  
    // @LINE:6
    def index(): Call = {
      
      Call("GET", _prefix)
    }
  
  }

  // @LINE:15
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:15
    def versioned(file:Asset): Call = {
      implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
      Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[Asset]].unbind("file", file))
    }
  
  }


}
