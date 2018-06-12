package controllers;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

import models.Person;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http.Request;
import play.mvc.Result;
import utils.JsonParser;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {


    	List<Person> persons = Person.find.query().findList();

    	return ok(JsonParser.response(persons));
    }


    public Result recieve() {

    	System.out.println("Hey!!!!!");
    	Request req = request();
    	JsonNode jn = req.body().asJson();

    	Person p = Json.fromJson(jn, Person.class);
    	p.insert();

    	return ok("Are you ok?");
    }

    public Result delete() {

    	Request req = request();
    	JsonNode jn = req.body().asJson();

    	String id = jn.get("id").asText();

    	Person.find.query().findList().stream()
    	.filter(person -> person.id == Integer.valueOf(id))
    	.forEach(person -> person.delete());

    	return ok("Are you ok?");
    }

    public Result update() {

    	System.out.println("into update!!!!!");
    	Request req = request();
    	JsonNode jn = req.body().asJson();

    	Person p = Json.fromJson(jn, Person.class);
    	p.update();

    	return ok("Are you ok??");
    }
}


