import { BleClient } from './bleClient';

async function main() {
  await BleClient.initialize();
  const device = await BleClient.requestDevice({ namePrefix: 'Muse' });
  await BleClient.connect(device.deviceId, () => console.log('Disconnect'));

  // // start stream
  // const command = encodeCommand('d').buffer
  // const view = new DataView(command)
  // await client.writeWithoutResponse({ deviceId: device.deviceId, service: MUSE_SERVICE, characteristic: c.MUSE_GATT_ATTR_STREAM_TOGGLE, value: view })
}

main();
