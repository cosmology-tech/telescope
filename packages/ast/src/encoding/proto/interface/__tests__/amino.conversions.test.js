import Long from 'long';

const Duration = {
    fromAmino(object) {
      const value = parseInt(object);
      return {
        seconds: Long.fromNumber(Math.floor(value / 1_000_000_000)),
        nanos: value % 1_000_000_000
      };
    },
  
    toAmino(message) {
      return ( (message.seconds.toInt() * 1_000_000_000) + message.nanos ).toString();
    }
  
  };

it('toAmino', () => {
    const value = Duration.fromAmino('131636915500000000');
    expect(value).toEqual({ seconds: Long.fromValue(131636915), nanos: 500000000 });
})

it('fromAmino', () => {
    const value = Duration.toAmino({ seconds: Long.fromValue(131636915), nanos: 500000000 });
    expect(value).toEqual('131636915500000000');
})