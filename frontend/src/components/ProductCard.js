import banana from "../assets/banana.jpg";
import cherries from "../assets/cherries.jpg";
import orange from "../assets/orange.jpg";
import watermelon from "../assets/watermelon.jpg";
import pomegranate from "../assets/pomegranate.jpg";

function ProductCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-6">
      <div className="card w-60 glass shadow-lg">
        <figure>
          <img src={banana} alt="banana" className="h-44" />
        </figure>
        <div className="h-28 flex-row justify-start pl-8 pt-4">
          <div className="card-title">Banana</div>
          <div className="flex justify-start text-sm">Stock: 10</div>
          <div className="flex flex-row justify-between items-center pr-8 pt-2">
            <div>
              <div className="text-sm">$2 per pack</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                +
              </button>
              <div className="text-sm">2</div>
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* TWO */}
      <div className="card w-60 glass shadow-lg">
        <figure>
          <img src={cherries} alt="cherries" className="h-44" />
        </figure>
        <div className="h-28 flex-row justify-start pl-8 pt-4">
          <div className="card-title">Cherries</div>
          <div className="flex justify-start text-sm">Stock: 10</div>
          <div className="flex flex-row justify-between items-center pr-8 pt-2">
            <div>
              <div className="text-sm">$5 per pack</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                +
              </button>
              <div className="text-sm">2</div>
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* THREE */}
      <div className="card w-60 glass shadow-lg">
        <figure>
          <img src={orange} alt="orange" className="h-44" />
        </figure>
        <div className="h-28 flex-row justify-start pl-8 pt-4">
          <div className="card-title">Oranges</div>
          <div className="flex justify-start text-sm">Stock: 10</div>
          <div className="flex flex-row justify-between items-center pr-8 pt-2">
            <div>
              <div className="text-sm">$3 per pack</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                +
              </button>
              <div className="text-sm">2</div>
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FOUR */}
      <div className="card w-60 glass shadow-lg">
        <figure>
          <img src={watermelon} alt="watermelon" className="h-44" />
        </figure>
        <div className="h-28 flex-row justify-start pl-8 pt-4">
          <div className="card-title">Watermelon</div>
          <div className="flex justify-start text-sm">Stock: 10</div>
          <div className="flex flex-row justify-between items-center pr-8 pt-2">
            <div>
              <div className="text-sm">$7 per pack</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                +
              </button>
              <div className="text-sm">2</div>
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FIVE */}
      <div className="card w-60 glass shadow-lg">
        <figure>
          <img src={pomegranate} alt="pomegranate" className="h-44" />
        </figure>
        <div className="h-28 flex-row justify-start pl-8 pt-4">
          <div className="card-title">Pomegranate</div>
          <div className="flex justify-start text-sm">Stock: 10</div>
          <div className="flex flex-row justify-between items-center pr-8 pt-2">
            <div>
              <div className="text-sm">$7 per pack</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                +
              </button>
              <div className="text-sm">2</div>
              <button className="w-6 h-6 rounded-lg bg-green-100 text-white">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
