const ISDT = artifacts.require("Isdt");
const BigNumber = require("bignumber.js");

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

/**
 * test result 
*/
contract('BASIC TEST [GRAME]', async accounts => {
  const [host1, host2, creatorSTARDUST, judge1, judge2,
    judge3, bank, withdrawalWallet, tokenManager, burner] = accounts;


  const cal = function (amt) {
    let result = new BigNumber(amt).toNumber();
    return result;
  };
  const getBalance = async function (addr) {
    let isdt = await ISDT.deployed();
    let val = await isdt.balanceOf(addr);

    val = cal(val);

    return val;

  }
  // * do test in part ( part1 , part2) : truffle test 
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //-------------------------------------------------------------------------------------
  // //////////    //////      ////////////    ////////////////          /// 
  // //      //   //   //      //       //          ////               /////
  // /////////   //     //     ///////////          ////               /  //
  // //         ///////////    //        //         ////                  //
  // //        //         //   //         //        ////               /////////
  //-------------------------------------------------------------------------------------
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
  
  // describe('1. GETTER TEST', () => {
  //   it("01. allowance", async () => {
  //     let isdt = await ISDT.deployed();
  //     let amt1 = 10000;
  //     await isdt.approve(host2, amt1, { from: host1 });

  //     let result = await isdt.allowance(host1, host2);
  //     result = cal(result);
  //     assert.equal(amt1, result, "is allowance true ? ");
  //   });

  //   it("02. balanceOf", async () => {
  //     let isdt = await ISDT.deployed();
  //     let totalBalance = 10000000000; //100억개
  //     let balance = await isdt.balanceOf(host1);
  //     balance = cal18(balance);
  //     assert.equal(totalBalance, balance);
  //   });

  //   it("03. burners", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isBurner = await isdt.burners(host1);

  //     assert.equal(isBurner, false);
  //   });

  //   it("04. chkBurnerList", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isBurner = await isdt.chkBurnerList(0);

  //     assert.equal(isBurner, false);
  //   });

  //   it("05. chkOwnerList", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isOwner = await isdt.chkOwnerList(0);

  //     assert.equal(isOwner, host1);
  //   });

  //   it("06. decimals", async() => {
  //     let isdt = await ISDT.deployed();
  //     let decimals = await isdt.decimals();

  //     assert.equal(decimals, 18);
  //   });

  //   it("07. depositWallet", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isDWallet = await isdt.depositWallet(host1);

  //     assert.equal(isDWallet, false);
  //   });

  //   it("08. granularity", async() => {
  //     let isdt = await ISDT.deployed();
  //     let granularity = await isdt.granularity();

  //     granularity = cal18(granularity);

  //     assert.equal(granularity, 1);
  //   });

  //   it("09. hiddenOwner", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isHiddenOwner = await isdt.hiddenOwner();

  //     assert.equal(isHiddenOwner, host1);
  //   });

  //   it("10. INITIAL_SUPPLY", async() => {
  //     let isdt = await ISDT.deployed();
  //     let initialSupply = await isdt.INITIAL_SUPPLY();

  //     initialSupply = cal18(initialSupply);

  //     assert.equal(initialSupply, 1e+10);
  //   });

  //   it("11. isburnlist", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isburnlist = await isdt.isburnlist(host1);

  //     assert.equal(isburnlist, false);
  //   });

  //   it("12. isPermitted", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isPermitted = await isdt.isPermitted(host1);

  //     assert.equal(isPermitted, true);
  //   });

  //   it("13. name", async() => {
  //     let isdt = await ISDT.deployed();
  //     let name = await isdt.name();
  //     assert.equal(name, "ISTARDUST");
  //   });

  //   it("14. owners", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isOwner = await isdt.owners(host1);
  //     assert.equal(isOwner, true);
  //   });

  //   it("15. paused", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isPaused = await isdt.paused();

  //     assert.equal(isPaused, false);
  //   });

  //   it("16. reclaimer", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isReclaimer = await isdt.reclaimer();

  //     assert.equal(isReclaimer, host1);

  //   });

  //   it("17. superOwner", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isSuperOwner = await isdt.superOwner();

  //     assert.equal(isSuperOwner, host1);
  //   });

  //   it("18. symbol", async() => {
  //     let isdt = await ISDT.deployed();
  //     let symbol = await isdt.symbol();

  //     assert.equal(symbol, "ISDT");
  //   });

  //   it("19. tokenManager", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isTManger = await isdt.tokenManager();
  //     let x0 = "0x0000000000000000000000000000000000000000";
  //     assert.equal(x0, isTManger);

  //   });

  //   it("20. totalSupply", async() => {
  //     let isdt = await ISDT.deployed();
  //     let _totalSupply = await isdt.totalSupply();
  //     _totalSupply = cal18(_totalSupply)
  //     assert.equal(_totalSupply, 1e+10);
  //   });

  //   it("21. withdrawalWallet", async() => {
  //     let isdt = await ISDT.deployed();
  //     let _withdrawalWallet = await isdt.withdrawalWallet();
  //     let x0 = "0x0000000000000000000000000000000000000000";
  //     assert.equal(x0, _withdrawalWallet);

  //   });

  //   it("22. chkJudgeList", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isJudge = await isdt.chkJudgeList(0);
  //     let x0 = "0x0000000000000000000000000000000000000000";
  //     assert.equal(x0, isJudge);
  //   });

  //   it("23. judges", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isJudge = await isdt.judges(host1);

  //     assert.equal(isJudge, false);
  //   });
  // });

  // * do test in part ( part1 , part2)
  // contracts/Isdt.sol line716 
  //for commercial
  //uint256 public constant granularity = 1e18;
  //for test
  //uint256 public constant granularity = 1e4; 
  // change 1e18 
  to 1e4 for test
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //-------------------------------------------------------------------------------------
  // //////////    //////      ////////////    ////////////////        //////// 
  // //      //   //   //      //       //          ////              //      //
  // /////////   //     //     ///////////          ////               /     //
  // //         ///////////    //        //         ////                   //
  // //        //         //   //         //        ////                ///////////
  //-------------------------------------------------------------------------------------
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




  describe('2. SETTER TEST', () => {
    //host1 addBurner
    it("1. addBurner", async () => {
      let isdt = await ISDT.deployed();
      
      await isdt.addBurner(burner, 0, { from: host2 }).should.be.rejected;

      await isdt.addBurner(burner, 0, { from: host1 }).should.be.fulfilled;

      let isBurner = await isdt.burners(burner);
      assert.equal(isBurner, true);

      isBurner = await isdt.chkBurnerList(0);
      assert.equal(isBurner, burner);
    });

    it("2. addBurnlist", async () => {
      let isdt = await ISDT.deployed();
      
      await isdt.addBurnlist(host1, { from: host2 }).should.be.rejected;

      await isdt.addBurnlist(host2, { from: host1 }).should.be.fulfilled;

    });

    
    it("3. addOwner", async () => {
      let isdt = await ISDT.deployed();
     
      await isdt.addOwner(host1, 1, { from: host2 }).should.be.rejected;

      await isdt.addOwner(host2, 1, { from: host1 }).should.be.fulfilled;
     
      await isdt.addOwner(host2, 2, { from: host1 }).should.be.rejected;
    });

    it("4. approve", async () => {
      let isdt = await ISDT.deployed();
      let amt1 = 100000;
      await isdt.approve(host2, amt1, { from: host1 });

      let result = await isdt.allowance(host1, host2);

      result = cal(result);

      assert.equal(result, amt1);
    });

    it("5. blacklist", async () => {
      let isdt = await ISDT.deployed();

      await isdt.blacklist(host1, { from: burner }).should.be.rejected;

      await isdt.blacklist(host1, { from: host2 }).should.be.fulfilled;
     
      await isdt.blacklist(host1, { from: host1 }).should.be.rejected;
    });

    it("6. burn", async () => {
      let isdt = await ISDT.deployed();
      let flag = await isdt.burners(burner);
      assert.equal(flag, true);

      await isdt.addBurnlist(host1, { from: host1 }).should.be.fulfilled;
      await isdt.burn(host1, 100000, { from: burner }).should.be.fulfilled;
      await isdt.burn(host1, 100000, { from: host1 }).should.be.rejected;
    });

    it("7. changeHiddenOwner", async () => {
      let isdt = await ISDT.deployed();

      await isdt.changeHiddenOwnership(host2, { from: host2 }).should.be.rejected;

      await isdt.changeHiddenOwnership(host2, { from: host1 }).should.be.fulfilled;

      await isdt.changeHiddenOwnership(host1, { from: host2 }).should.be.fulfilled;

    });

    it("8. changeReclaimer", async () => {
      let isdt = await ISDT.deployed();

      await isdt.changeReclaimer(host2, { from: host2 }).should.be.rejected;
      await isdt.changeReclaimer(host2, { from: host1 }).should.be.fulfilled;
      await isdt.changeReclaimer(host1, { from: host1 }).should.be.fulfilled;
    });

    it("9. changeSuperOwner", async () => {
      let isdt = await ISDT.deployed();

      await isdt.changeSuperOwnership(host2, { from: host2 }).should.be.rejected;
      await isdt.changeSuperOwnership(host2, { from: host1 }).should.be.fulfilled;
      await isdt.changeSuperOwnership(host1, { from: host1 }).should.be.fulfilled;
    });

    it("10. decreaseApproval", async () => {
      let isdt = await ISDT.deployed();
      await isdt.approve(host2, 1000000, { from: host1 });
      let amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[before]: ', amount);

      await isdt.decreaseApproval(host2, 55000);

      amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[after]: ', amount);

    });

    it("11. increaseApproval", async () => {
      let isdt = await ISDT.deployed();

      let amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[before]: ', amount);

      await isdt.increaseApproval(host2, 55000);

      amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[after]: ', amount);

    });

    it("12. delDepositWallet", async () => {
      let isdt = await ISDT.deployed();

      let isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, false);

      await isdt.transferTokenManagerRole(tokenManager, { from: host1 }).should.be.fulfilled;

      await isdt.setDepositWallet(creatorSTARDUST, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, true);

      await isdt.delDepositWallet(creatorSTARDUST, { from: host1 }).should.be.rejected;

      await isdt.delDepositWallet(creatorSTARDUST, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, false);
    });

    it("13. deleteBurner", async () => {
      let isdt = await ISDT.deployed();
      let flag = await isdt.burners(burner);
      assert.equal(flag, true);
      await isdt.deleteBurner(burner, 0, { from: host2 }).should.be.rejected;
      await isdt.deleteBurner(burner, 1, { from: host1 }).should.be.rejected;
      await isdt.deleteBurner(tokenManager, 0, { from: host1 }).should.be.rejected;
      await isdt.deleteBurner(burner, 0, { from: host1 }).should.be.fulfilled;
      flag = await isdt.burners(burner);
      assert.equal(flag, false);
    });

    it("14. deleteOwner", async () => {
      let isdt = await ISDT.deployed();
      let isOwner = await isdt.owners(host1);
      assert.equal(isOwner, true);
      await isdt.deleteOwner(host1, 0, { from: host1 }).should.be.fulfilled;
      isOwner = await isdt.owners(host1);
      assert.equal(isOwner, false);
      await isdt.addOwner(host1, 0, { from: host1 });
      isOwner = await isdt.owners(host1);
      assert.equal(isOwner, true);
    });

    it("15. delBurnlist", async () => {
      let isdt = await ISDT.deployed();
      let isBurnlist = await isdt.isburnlist(host1);

      assert.equal(isBurnlist, true);

      await isdt.delBurnlist(host1, { from: tokenManager }).should.be.rejected;

      await isdt.delBurnlist(host1, { from: host1 }).should.be.fulfilled;

      await isdt.delBurnlist(host1, { from: host1 }).should.be.rejected;
    });


    it("16. mint", async () => {
      let isdt = await ISDT.deployed();
      let amt1 = 10000000;
      let isBurner = await isdt.burners(burner);
      assert.equal(isBurner, false);
      await isdt.addBurner(burner, 1, { from: host1 });
      await isdt.addBurnlist(host1, { from: host1 }).should.be.fulfilled;
      await isdt.burn(host1, amt1, { from: burner }).should.be.fulfilled;
      await isdt.mint(amt1, { from: host1 }).should.be.fulfilled;
    });

    it("17. pause", async () => {
      let isdt = await ISDT.deployed();

      let isPaused = await isdt.paused();

      assert.equal(isPaused, false);

      await isdt.pause();
      isPaused = await isdt.paused();
      assert.equal(isPaused, true);

    });

    it("18. reclaimToken", async () => {

    });

    it("19. setDepositWallet", async () => {
      let isdt = await ISDT.deployed();

      await isdt.setDepositWallet(burner, { from: tokenManager }).should.be.fulfilled;
      let isDW = await isdt.depositWallet(burner);
      assert.equal(isDW, true);

      await isdt.delDepositWallet(burner, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(burner);

      assert.equal(isDW, false);

      await isdt.setDepositWallet(creatorSTARDUST, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, true);

    });

    it("22. transferWithdrawalWallet", async () => {
      let isdt = await ISDT.deployed();
      let wWallet = await isdt.withdrawalWallet();
      console.log('wWallet[before] : ', wWallet);
      await isdt.transferWithdrawalWallet(withdrawalWallet, { from: host1 }).should.be.fulfilled;
      wWallet = await isdt.withdrawalWallet();
      console.log('wWallet[after] : ', wWallet);
    });

    it("20. transfer", async () => {
      let isdt = await ISDT.deployed();
      let amt1 = 100000000000000;
      await isdt.unpause({ from: host1 });
      await isdt.unblacklist(host1, { from: host1 });
      await isdt.transferBankOwnership(bank, { from: host1 });

      let val = await isdt.depositWallet(host1);

      //test를 위해 1e4 -> 1e18로 변경
      let gran = await isdt.granularity();

      await isdt.transfer(host2, gran, { from: host1 }).should.be.fulfilled;

      await isdt.transfer(judge1, amt1, { from: host1 }).should.be.fulfilled;

      await isdt.transfer(judge2, amt1, { from: host1 }).should.be.fulfilled;

      await isdt.transfer(judge3, amt1, { from: host1 }).should.be.fulfilled;

    });

    it("21. transferFrom", async () => {
      let isdt = await ISDT.deployed();

      let amt1 = 100000000000000;
      let amt2 = 100000000000000;

      await isdt.approve(judge1, amt1, { from: judge2 }).should.be.fulfilled;
      let val = await isdt.allowance(judge2, judge1);

      assert.equal(val, amt1);

      await isdt.transferFrom(judge2, judge3, amt1, { from: judge1 }).should.be.fulfilled;
      val = await getBalance(judge3);

      assert.equal(val, amt1 + amt2);

      await isdt.pause({ from: host1 });
    });


    it("23. unblacklist", async () => {
      let isdt = await ISDT.deployed();

      let isPermitted = await isdt.isPermitted(host1);


    });

    it("24. unpause", async () => {
      let isdt = await ISDT.deployed();

      let isPaused = await isdt.paused();

      assert.equal(isPaused, true);

      await isdt.unpause({ from: host1 }).should.be.fulfilled;

    });

    it("25. vacummCleaner", async () => {
      let isdt = await ISDT.deployed();
      
      await isdt.setDepositWallet(judge1, { from: tokenManager }).should.be.fulfilled;
      await isdt.setDepositWallet(judge2, { from: tokenManager }).should.be.fulfilled;
      await isdt.setDepositWallet(judge3, { from: tokenManager }).should.be.fulfilled;
      
      let superOwner = await isdt.superOwner();
      let judge1Balance = await getBalance(judge1);
      let judge2Balance = await getBalance(judge2);
      let judge3Balance = await getBalance(judge3);
      let host1Balance = await getBalance(superOwner);
      
      console.log(1, judge1Balance);
      console.log(2, judge2Balance);
      console.log(3, judge3Balance);
      console.log(4, host1Balance);

      let data = [judge1, judge2, judge3];
      await isdt.vacummCleaner(data, { from: tokenManager }).should.be.fulfilled;
      judge1Balance = await getBalance(judge1);
      judge2Balance = await getBalance(judge2);
      judge3Balance = await getBalance(judge3);
      host1Balance = await getBalance(superOwner);
      console.log(11, judge1Balance);
      console.log(22, judge2Balance);
      console.log(33, judge3Balance);
      console.log(44, host1Balance);
    });

    it("26. withdraw", async () => {
      let amt1 = 500000000000000;
      let amt2 = 100000000000000;

      let isdt = await ISDT.deployed();
      let addr = await isdt.withdrawalWallet();

      assert.equal(addr, withdrawalWallet);

      await isdt.transfer(withdrawalWallet, amt1, { from: host1 }).should.be.fulfilled;

      await isdt.transfer(judge2, amt2, { from: withdrawalWallet }).should.be.rejected;

      await isdt.withdraw(judge2, amt2, { from: withdrawalWallet }).should.be.rejected;
      let wWalletBalance = await getBalance(withdrawalWallet);
      console.log('balance[before]: ', wWalletBalance);

      await isdt.withdraw(judge2, amt2, { from: tokenManager }).should.be.fulfilled;

      wWalletBalance = await getBalance(withdrawalWallet);
      console.log('balance[after]: ', wWalletBalance);
    });

    it("27. addJudge", async () => {
      let isdt = await ISDT.deployed();
      await isdt.addJudge(judge1, 0);
      await isdt.addJudge(judge2, 1);
      await isdt.addJudge(judge3, 2, { from: tokenManager }).should.be.rejected;
      await isdt.addJudge(judge3, 2);

      let jud1 = await isdt.chkJudgeList(0);
      assert.equal(jud1, judge1);

      let jud2 = await isdt.chkJudgeList(1);
      assert.equal(jud2, judge2);

      let jud3 = await isdt.chkJudgeList(2);
      assert.equal(jud3, judge3);


    });

    it("28. deleteJudge", async () => {
      let isdt = await ISDT.deployed();
      await isdt.deleteJudge(judge1, 0, { from: host1 }).should.be.fulfilled;
      await isdt.deleteJudge(judge1, 1, { from: host1 }).should.be.rejected;
      await isdt.deleteJudge(judge2, 1, { from: host1 }).should.be.fulfilled;
      await isdt.deleteJudge(judge3, 2, { from: host1 }).should.be.fulfilled;

      await isdt.addJudge(judge1, 0, { from: host1 }).should.be.fulfilled;
      await isdt.addJudge(judge2, 1, { from: host1 }).should.be.fulfilled;
      await isdt.addJudge(judge3, 2, { from: host1 }).should.be.fulfilled;

    });

    it("29. agree", async () => {

      let amt1 = 500000000000000;
      let amt2 = 100000000000000;

      let isdt = await ISDT.deployed();

      await isdt.depositToBank(amt1, { from: host1 }).should.be.fulfilled;
      // await isdt.agree({from: judge1});
      await isdt.withdrawFromBank(amt2, { from: bank }).should.be.rejected;

      await isdt.agree({ from: judge1 });
      await isdt.agree({ from: judge2 });
      await isdt.disagree({ from: judge2 });
      await isdt.agree({ from: judge2 });

      let result = await isdt.voteBox(judge2);
      console.log(22, result);
      result = await isdt.voteBox(judge3);
      console.log(33, result);

      await isdt.withdrawFromBank(amt2, { from: bank }).should.be.fulfilled;

      result = await isdt.voteBox(judge1);
      console.log(1, result);
      result = await isdt.voteBox(judge2);
      console.log(2, result);
      result = await isdt.voteBox(judge3);
      console.log(3, result);

    });

    it("30. disagree", async () => {
      let isdt = await ISDT.deployed();
      await isdt.agree({ from: judge2 }).should.be.fulfilled;
      await isdt.disagree({ from: judge2 }).should.be.fulfilled;

    });

    it("31. transferBankOwnership", async () => {
      let isdt = await ISDT.deployed();
      await isdt.transferBankOwnership(judge1, { from: host1 }).should.be.fulfilled;
      await isdt.transferBankOwnership(bank, { from: host1 }).should.be.fulfilled;

    });

    it("32. withdrawFromBank", async () => {
      let amt1 = 100000000000000;
      let isdt = await ISDT.deployed();
      await isdt.agree({ from: judge1 });
      await isdt.agree({ from: judge2 });
      await isdt.withdrawFromBank(amt1, { from: bank }).should.be.fulfilled;
    });

    it("33. transferTokenManagerRole", async () => {
      let isdt = await ISDT.deployed();
      await isdt.transferTokenManagerRole(judge1, { from: host1 }).should.be.fulfilled;
      await isdt.transferTokenManagerRole(tokenManager, { from: host1 }).should.be.fulfilled;
    });


    it("35. depositToBank", async () => {
      let isdt = await ISDT.deployed();
      let amt1 = 100000000000000;
      await isdt.depositToBank(amt1, { from: host1 }).should.be.fulfilled;
    });

    it("36. withdrawFromBank", async () => {
      let isdt = await ISDT.deployed();
      let amt1 = 100000000000000;
      await isdt.withdrawFromBank(amt1, { from: bank }).should.be.rejected;

      let judge1Result = await isdt.voteBox(judge1);
      let judge2Result = await isdt.voteBox(judge2);
      let judge3Result = await isdt.voteBox(judge3);

      console.log(judge1Result, judge2Result, judge3Result);

      await isdt.agree({ from: judge1 });
      await isdt.agree({ from: judge2 });
      await isdt.agree({ from: judge3 });

      await isdt.withdrawFromBank(amt1, { from: bank }).should.be.fulfilled;
    });

    it("34. destory", async () => {
      let isdt = await ISDT.deployed();
      await isdt.destory();
      await isdt.name().should.be.rejected;
      await isdt.totalSupply().should.be.rejected;
    });
  });
});