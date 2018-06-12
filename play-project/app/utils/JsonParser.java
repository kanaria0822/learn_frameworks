package utils;

import java.io.IOException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import play.libs.Json;
import play.mvc.Http;

public class JsonParser {

    public static <T> T request(Http.Request req, Class<T> cls) {
        JsonNode node = req.body().asJson();

        T obj = null;
        try {
            obj = Json.fromJson(node, cls);
        } catch(Exception e) {
            e.printStackTrace();
        }

        return obj;
    }

    public static JsonNode response(Object obj) {
       return Json.toJson(obj);
    }

    public static <T> T fromJson(String json, Class<T> cls) {
        try {
            JsonNode node = (new ObjectMapper()).readTree(json);
            T item = Json.fromJson(node, cls);
            return item;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String toJson(Object obj) {
        return Json.toJson(obj).toString();
    }
}
