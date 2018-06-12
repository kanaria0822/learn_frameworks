package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import io.ebean.Finder;
import io.ebean.Model;


@Entity
@Table(name="personal")
public class Person extends Model{


	@Id
	@Column(name="id")
	public int id;

	@Column(name="name")
	public String name;

	public static Finder<Long, Person> find = new Finder<>(Person.class);


	public String toString() {
		return "{\"id\":\"" + this.id + "\",\"name\":\"" + this.name + "\"}";

	}
}



