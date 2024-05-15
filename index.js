const senderSignature = aptos.transaction.sign({ signer: alice, transaction });

// Sponsor signs
const sponsorSignature = aptos.transaction.signAsFeePayer({
  signer: sponsor,
  transaction,
});

// Submit the transaction to chain
const committedTxn = await aptos.transaction.submit.simple({
  transaction,
  senderAuthenticator: senderSignature,
  feePayerAuthenticator: sponsorSignature,
});
