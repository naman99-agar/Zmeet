import { NetworkType } from "@airgap/beacon-dapp";
import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
  name: "Hyprverse",
  preferredNetwork: NetworkType.GHOSTNET,
});

export const connectWallet = async () => {
  await wallet.requestPermissions({ network: { type: NetworkType.GHOSTNET } });
};

export const getAccount = async () => {
  const connectedWallet = await wallet.client.getActiveAccount();
  if (connectedWallet) {
    return connectedWallet.address;
  } else {
    return "";
  }
};
