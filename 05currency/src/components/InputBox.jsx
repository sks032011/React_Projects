import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    
    const reactId=useId()

    return (
        <div className={`bg-white text-black p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={reactId}  className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={reactId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    //&& wala isliye likha kyuki onamchg ki initial value kuch nahi h to crash kr skta h but now it willonly execute if on amtch exists
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    // y current value dikhaega ex usd
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    //ex usd to ind
                    disabled={currencyDisable}
                >
                    
                      {currencyOptions.map((currency)=>(
                          <option key={currency} value={currency}>
                          {currency}
                      </option>
              
                      )

                      )

                      }
                </select>
            </div>
        </div>
    );
}

export default InputBox;