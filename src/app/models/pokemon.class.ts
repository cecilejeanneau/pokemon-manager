import { Pokemon as PokemonInterface } from './pokemon.model';

export class Pokemon implements PokemonInterface {
	private _id: number;
	private _name: string;
	private _type: string;
	private _height?: number;
	private _weight?: number;
	private _image?: string;

	constructor(id: number, name: string, type: string, height?: number, weight?: number, image?: string) {
		this._id = id;
		this._name = name;
		this._type = type;
		this._height = height;
		this._weight = weight;
		this._image = image;
	}

	get id(): number {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get type(): string {
		return this._type;
	}

	get height(): number | undefined {
		return this._height;
	}

	get weight(): number | undefined {
		return this._weight;
	}

	get image(): string | undefined {
		return this._image;
	}

	set height(value: number | undefined) {
		this._height = value;
	}

	set weight(value: number | undefined) {
		this._weight = value;
	}

	set image(value: string | undefined) {
		this._image = value;
	}
}
