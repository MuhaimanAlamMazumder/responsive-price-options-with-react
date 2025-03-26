

const PriceOption = () => {

   const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 guest pass per month"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "Everything in Basic Plan",
            "Group fitness classes",
            "Free fitness assessment",
            "3 guest passes per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 69.99,
          "features": [
            "Everything in Standard Plan",
            "Unlimited guest access",
            "Sauna and steam room access",
            "Priority class booking"
          ]
        },
        {
          "id": 4,
          "name": "Personal Training Plan",
          "price": 99.99,
          "features": [
            "Everything in Premium Plan",
            "4 personal training sessions per month",
            "Customized workout plan",
            "Nutrition consultation"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {

                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOption;
